<?php

namespace App\Controller;

use App\Entity\Message;

use App\Repository\UserRepository;
use App\Repository\MessageRepository;
use App\Repository\DiscussionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
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
    public function browse(MessageRepository $messageRepository,  SerializerInterface $serializer, Request $request)
    {

        // On décode les données envoyées
        $donnees = json_decode($request->getContent());
        /** On verifie si la propriété est envoyé dans le json si oui on hydrate l'objet 
         * sinon on passe à la suite */
        $messages = $messageRepository->findAllByDiscussion($donnees->discussion);

        return $this->json($serializer->normalize(
            $messages,
            null
        ));
    }



    /**
     * @Route("/{id}", name="read", requirements={"id": "\d+"},  methods={"GET"})
     */
    public function read(MessageRepository $messageRepository,  SerializerInterface $serializer, $id)
    {
        $messages = $messageRepository->findByDiscussion($id);

        return $this->json($serializer->normalize(
            $messages,
            null
        ));
    }

// browse 

    /**
     * @Route("/", name="add", methods={"POST"})
     */
    public function add(Request $request, UserRepository $userRepository, DiscussionRepository $discussionRepository)
    {
        
        $message = new Message();

        // On décode les données envoyées
        $donnees = json_decode($request->getContent());
        /** On verifie si la propriété est envoyé dans le json si oui on hydrate l'objet 
         * sinon on passe à la suite */
        if (isset($donnees->content)) {
            $message->setContent($donnees->content);
        };
        
        $user = $userRepository->find($donnees->user);
        $message->setUser($user);

        $discussion = $discussionRepository->find($donnees->discussion);
        $message->setDiscussion($discussion);
      
        $message->setCreatedAt(new \Datetime());
        
        // On sauvegarde en base
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($message);
        $entityManager->flush();

        // On retourne la confirmation
        return new Response('ok', 201);
    }


     /**
     * @Route("/{id}", name="edit", methods={"PATCH"}, requirements={"id": "\d+"})
     */
    public function edit(Message $message, Request $request, $id)
    {
        // On décode les données envoyées
        $donnees = json_decode($request->getContent());
        /** On verifie si la propriété est envoyé dans le json si oui on hydrate l'objet 
         * sinon on passe à la suite */
        if (isset($donnees->content)) {
            $message->setContent($donnees->content);
        };
        
        
        
        $message->setUpdatedAt(new \Datetime());

        $message = $this->getDoctrine()->getRepository(Message::class)->findOneBy(["id" => $id]);

        // On sauvegarde en base
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($message);
        $entityManager->flush();

        // On retourne la confirmation
        return new Response('ok', 204);
    }

     /**
     * @Route("/{id}", name="delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete(Message $message)
    {
        /**  // Ici on utilise un voter
         * // Cette fonction va émettre une exception Access Forbidden pour interdire l'accès au reste du contrôleur
         * // Les conditions pour lesquelles le droit MOVIE_DELETE est applicable sur $movie pour l'utilisateur connecté
         * // sont définies dans les voters, dans leurs méthodes voteOnAttribute()*/


        // $this->denyAccessUnlessGranted('MOVIE_DELETE', $movie);

        $em = $this->getDoctrine()->getManager();

        $em->remove($message);
        $em->flush();

        // On retourne la confirmation
        return new Response('supression ok', 200);
    }
}
