<?php

namespace App\Controller;

use App\Entity\Discussion;
use App\Entity\Announcement;
use App\Repository\MessageRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
     * @Route("/api/messages", name="api_messages")
     */
class MessageController extends AbstractController
{
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


    // /**
    //  * @Route("/", name="add", methods={"POST"})
    //  */
    // public function add(Request $request, UserRepository $userRepository )
    // {
        
    //     $message = new Announcement();

    //     // On décode les données envoyées
    //     $donnees = json_decode($request->getContent());
    //     /** On verifie si la propriété est envoyé dans le json si oui on hydrate l'objet 
    //      * sinon on passe à la suite */
    //     if (isset($donnees->content)) {
    //         $message->setContent($donnees->content);
    //     };
    //     $donnees->user_id = $this
    //         $user = $userRepository->find($donnees->user_id);
    //         $announcement->setUser($user);
        
      
    //     $message->setCreatedAt(new \Datetime());
        
    //     // On sauvegarde en base
    //     $entityManager = $this->getDoctrine()->getManager();
    //     $entityManager->persist($announcement);
    //     $entityManager->flush();

    //     // On retourne la confirmation
    //     return new Response('ok', 201);
    // }
}
