<?php

namespace App\Controller;

use App\Entity\Discussion;
use App\Repository\AnnouncementRepository;
use App\Repository\UserRepository;
use App\Repository\MessageRepository;
use App\Repository\DiscussionRepository;
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
    public function browse(DiscussionRepository $discussionRepository,  SerializerInterface $serializer, Request $request)
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
        $creator = $discussionRepository->findBy(array('creator' => $id ));
       
       $receiver = $discussionRepository->findBy(array('receiver' => $id ));
    
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
    public function add(Request $request, UserRepository $userRepository, AnnouncementRepository $announcementRepository)
    {

        $discussion = new Discussion();

        // On décode les données envoyées
        $donnees = json_decode($request->getContent());
        
        $creator = $userRepository->find($donnees->creator_id);
        $discussion->setCreator($creator);
        
        $receiver = $userRepository->find($donnees->receiver_id);
        $discussion->setReceiver($receiver);

        $announcement = $announcementRepository->find($donnees->announcement_id);
        $discussion->setAnnouncement($announcement);

        $discussion->setCreatedAt(new \Datetime());

        // On sauvegarde en base
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($discussion);
        $entityManager->flush();

        // On retourne la confirmation
        return new Response('ok', 201);
    }


    /**
     * @Route("/{id}", name="delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete(Discussion $discussion)
    {
        //TOODOO le VOTER 
        /**  // Ici on utilise un voter
         * // Cette fonction va émettre une exception Access Forbidden pour interdire l'accès au reste du contrôleur
         * // Les conditions pour lesquelles le droit MOVIE_DELETE est applicable sur $movie pour l'utilisateur connecté
         * // sont définies dans les voters, dans leurs méthodes voteOnAttribute()*/

        // $this->denyAccessUnlessGranted('MOVIE_DELETE', $movie);

        $em = $this->getDoctrine()->getManager();

        $em->remove($discussion);
        $em->flush();

        // On retourne la confirmation
        return new Response('supression ok', 200);
    }
}
