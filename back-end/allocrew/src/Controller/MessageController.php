<?php

namespace App\Controller;

use App\Entity\Message;
use App\Form\MessageType;
use App\Repository\MessageRepository;
use App\Utils\GetErrorsFromForm;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/api/messages", name="api_messages")
 */
class MessageController extends AbstractController
{
    /**
     * @Route("/", name="browse", methods={"GET"})
     */
    public function browse(MessageRepository $messageRepository,  SerializerInterface $serializer)
    {
        $messages = $messageRepository->findAll();

        return $this->json($serializer->normalize(
            $messages,
            null,
            ['groups' => ['message']]
        ));
    }

    /**
     * @Route("/{id}", name="read", requirements={"id": "\d+"},  methods={"GET"})
     */
    public function read(MessageRepository $messageRepository,  SerializerInterface $serializer, $id)
    {
        $message = $messageRepository->findBy(array('id' => $id));

        if (!empty($message)) {
            return $this->json($serializer->normalize(
                $message,
                null,
                ['groups' => ['message']]
            ));
        } else {
            return new Response("le message n'est pas en base de données  ", 404);
        }
    }

    /**
     * @Route("/", name="add", methods={"POST"})
     */
    public function add(Request $request, GetErrorsFromForm $getErrorsFromForm)
    {

        $message = new Message();

        // On décode les données envoyées
        $donnees = json_decode($request->getContent(), true);
        /** On verifie si la propriété est envoyé dans le json si oui on hydrate l'objet 
         * sinon on passe à la suite */
        
        $form = $this->createForm(MessageType::class, $message);
        $donnees = $form->submit($donnees);

        if ($form->isValid()) {
            $message->setCreatedAt(new \DateTime);
          
            $em = $this->getDoctrine()->getManager();
            $em->persist($message);
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
     * @Route("/{id}", name="edit", methods={"PATCH"}, requirements={"id": "\d+"})
     */
    public function edit(Message $message, Request $request, GetErrorsFromForm $getErrorsFromForm)
    {
        // On décode les données envoyées
        $donnees = json_decode($request->getContent(), true);
        /** On verifie si la propriété est envoyé dans le json si oui on hydrate l'objet 
         * sinon on passe à la suite */
        $form = $this->createForm(MessageType::class, $message);
        $donnees = $form->submit($donnees, false);
        if ($form->isValid()) {
        
            $em = $this->getDoctrine()->getManager();
            $em->persist($message);
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
    public function delete(Message $message)
    {
        $em = $this->getDoctrine()->getManager();

        $em->remove($message);
        $em->flush();

        // On retourne la confirmation
        return new Response('supression ok', 200);
    }
}
