<?php

namespace App\Controller;

use App\Entity\Discussion;
use App\Form\DiscussionType;
use App\Repository\AnnouncementRepository;
use App\Repository\UserRepository;
use App\Repository\MessageRepository;
use App\Repository\DiscussionRepository;
use App\Utils\GetErrorsFromForm;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;



/**
 * @Route("/api/discussions", name="api_discussions_")
 */
class DiscussionController extends AbstractController
{
    /**
     * @Route("/", name="browse", methods={"GET"})
     */
    public function browse(DiscussionRepository $discussionRepository,  SerializerInterface $serializer)
    {
        $discussions = $discussionRepository->findAll();

        return $this->json($serializer->normalize(
            $discussions,
            null,
            ['groups' => ['discussion']]
        ));
    }

    /**
     * @Route("/{id}", requirements={"id": "\d+"}, name="read", methods={"GET"})
     */
    public function read(MessageRepository $messageRepository, DiscussionRepository $discussionRepository, $id, SerializerInterface $serializer)
    {

        $data = [];
        $creator = $discussionRepository->findBy(array('creator' => $id));

        $receiver = $discussionRepository->findBy(array('receiver' => $id));

        $data['by_creator'] = $creator;
        $data['by_receiver'] = $receiver;

        return $this->json($serializer->normalize(
            $data,
            null,
            ['groups' => ['discussion']]
        ));
    }

    /**
     * @Route("/", name="add", methods={"POST"})
     */
    public function add(Request $request, GetErrorsFromForm $getErrorsFromForm)
    {

        $discussion = new Discussion();

        // On décode les données envoyées
        $donnees = json_decode($request->getContent(), true);
        /** On verifie si la propriété est envoyé dans le json si oui on hydrate l'objet 
         * sinon on passe à la suite */
        $form = $this->createForm(DiscussionType::class, $discussion);

        $donnees = $form->submit($donnees);

        if ($form->isValid()) {
            $discussion->setCreatedAt(new \DateTime);
          
            $em = $this->getDoctrine()->getManager();
            $em->persist($discussion);
            $em->flush();
            return new JsonResponse('ok', 201);
        } else {
            $errors = $getErrorsFromForm->getErrors($form);
            $data = [
                'type' => 'validation_error',
                'title' => 'There was a validation error',
                'errors' => $errors,
            ];
            return new JsonResponse($data, 400);
        }
    }


    /**
     * @Route("/{id}", name="delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete(Discussion $discussion)
    {
        $em = $this->getDoctrine()->getManager();

        $em->remove($discussion);
        $em->flush();

        // On retourne la confirmation
        return new Response('Suppression effectuée', 200);
    }
}
