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
    public function account()
    {
        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
        ]);
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
     * @Route("/password/{id}", name="account_edit_password", methods={"GET","PATCH"})
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

        return $this->json($serializer->normalize(
            $user,
            null
        ));
    }

    /**
     * @Route("/", name="add", methods={"GET", "POST"})
     */
    public function add()
    {
        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }

    /**
     * @Route("/{id}", name="edit", methods={"PATCH"}, requirements={"id": "\d+"})
     */
    public function edit(User $user, Request $request, $id)
    {
        // On décode les données envoyées
        $donnees = json_decode($request->getContent());
    
        // On hydrate l'objet
        $user->setFirstname($donnees->firstname);
        $user->setLastname($donnees->lastname);
        $user->setAge($donnees->age);
        $user = $this->getDoctrine()->getRepository(User::class)->findOneBy(["id" => $id]);
       
        // On sauvegarde en base
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        // On retourne la confirmation
        return new Response('ok', 201);
    }

}
