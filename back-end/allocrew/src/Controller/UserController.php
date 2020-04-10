<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/api/users", name="api_users_")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/account/{id}", name="account", methods={"GET"})
     */
    public function account(UserRepository $UserRepository , SerializerInterface $serializer,  $id)
    {
            // TODO FILTRER LES ENVOIS DU FIND
        $user = $UserRepository->find($id);
        if (!empty($user)) { 
            return $this->json($serializer->normalize(
                $user,
                null
            ));
        } else {
            return new Response("l'utilisateur n'est pas en base de données ", 404);
        }
       
    }

    /**
     * @Route("/account/{id}", name="account_edit", methods={"GET","PATCH"})
     */
    public function accountEdit()
    {
        
        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }

    /**
     * @Route("/password/{id}", name="account_edit_password", methods={"PATCH"})
     */
    public function passwordEdit()
    {
        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }

    /**
     * @Route("/", name="browse", methods={"GET"})
     */
    public function browse(UserRepository $UserRepository, Request $request, SerializerInterface $serializer)
    {

        $user = $UserRepository->findAllForUsers();

        return $this->json($serializer->normalize(
            $user,
            null
        ));
    }

    /**
     * @Route("/{id}", name="read", requirements={"id": "\d+"},  methods={"GET"})
     */
    public function read(UserRepository $UserRepository, $id, Request $request, SerializerInterface $serializer)
    {

        $user = $UserRepository->findAllForUsersById($id);
        if (!empty($user)) {
            return $this->json($serializer->normalize(
                $user,
                null
            ));
        } else {
            return new Response("l'utilisateur n'est pas en base de données ", 404);
        }
    }

    /**
     * @Route("/{id}", name="edit", methods={"PATCH"}, requirements={"id": "\d+"})
     */
    public function edit(User $user, Request $request, $id)
    {
        
    
        // On décode les données envoyées
        $donnees = json_decode($request->getContent());
        /** On verifie si la propriété est envoyé dans le json si oui on hydrate l'objet 
         * sinon on passe à la suite */        
        if (isset($donnees->firstname)) {
            $user->setFirstname($donnees->firstname);
        };
        if (isset($donnees->lastname)) {
            $user->setLastname($donnees->lastname);
        }
        if (isset($donnees->age)) {
            $user->setAge($donnees->age);
        }
        if (isset($donnees->location)) {
            $user->setLocation($donnees->location);
        }
        if (isset($donnees->title)) {
            $user->setTitle($donnees->title);
        }
        if (isset($donnees->description)) {
            $user->setDescription($donnees->description);
        }
        if (isset($donnees->experience)) {
            $user->setExperience($donnees->experience);
        }
        if (isset($donnees->portfolio)) {
            $user->setPortfolio($donnees->portfolio);
        }
        if (isset($donnees->picture)) {
            $user->setPicture($donnees->picture);
        }
        if (isset($donnees->bannerpicture)) {
            $user->setBannerpicture($donnees->bannerpicture);
        }
        $user->setUpdatedat(new \Datetime());

        $user = $this->getDoctrine()->getRepository(User::class)->findOneBy(["id" => $id]);

        // On sauvegarde en base
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        // On retourne la confirmation
        return new Response('ok', 201);
    }
}
