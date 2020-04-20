<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use App\Repository\AnnouncementRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Services\ImageUpload;

/**
 * @Route("/api/users", name="api_users_")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/account/{id}", name="account", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function account(UserRepository $userRepository, SerializerInterface $serializer,  $id)
    {

        $user = $userRepository->findBy(array('id' => $id));

        if (!empty($user)) {
            return $this->json($serializer->normalize(
                $user,
                null,
                ['groups' => ['userAccount']]
            ));
        } else {
            return new Response("l'utilisateur n'est pas en base de données  ", 404);
        }
    }

    /**
     * @Route("/account/{id}", name="account_edit",requirements={"id": "\d+"}, methods={"PATCH"})
     */
    public function accountEdit(User $user, Request $request, $id)
    {

        // On décode les données envoyées
        $donnees = json_decode($request->getContent());
        /** On verifie si la propriété est envoyé dans le json si oui on hydrate l'objet 
         * sinon on passe à la suite */
        if (isset($donnees->email)) {
            $user->setEmail($donnees->email);
        }
        if (isset($donnees->firstname)) {
            $user->setFirstname($donnees->firstname);
        };
        if (isset($donnees->lastname)) {
            $user->setLastname($donnees->lastname);
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

    /**
     * @Route("/password/{id}", name="account_edit_password", methods={"PATCH"})
     */
    public function passwordEdit(User $user, Request $request, UserPasswordEncoderInterface $encoder)
    {
        // On décode les données envoyées
        $donnees = json_decode($request->getContent());
        /** On verifie si la propriété est envoyé dans le json si oui encode le mot de passe  
         * sinon on passe à la suite */
        if (isset($donnees->password)) {
            $user->setPassword($encoder->encodePassword($user, $donnees->password));
        }
        $user->setUpdatedat(new \Datetime());

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->flush();

        // On retourne la confirmation
        return new Response('password modifié', 201);
    }

    /**
     * @Route("/", name="browse", methods={"GET"})
     */
    public function browse(UserRepository $UserRepository, SerializerInterface $serializer)
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
    public function read(UserRepository $UserRepository, $id, SerializerInterface $serializer)
    {

        $user = $UserRepository->findBy(array('id' => $id));
        if (!empty($user)) {
            return $this->json($serializer->normalize(
                $user,
                null,
                ['groups' => ['userProfile']]
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
        $form = $this->createForm(UserType::class, $user);
        $donnees = $form->submit($donnees);
        /** On verifie si la propriété est envoyé dans le json si oui on hydrate l'objet 
         * sinon on passe à la suite */
        if ($form->isSubmitted()) {
            if (isset($form['firstname'])) {
                if ($form['firstname']->isValid()) {
                    $user->setFirstname($form['firstname']->getData());
                } else return new Response('Prénom Invalide', 400);
            }

            if (isset($form['lastname'])) {
                if ($form['lastname']->isValid()) {
                    $user->setLastname($form['lastname']->getData());
                } else return new Response('Nom de Famille Invalide', 400);
            }

            if (isset($form['age'])) {
                if ($form['age']->isValid()) {

                    $user->setAge($form['age']->getData());
                } else return new Response('Age Invalide', 400);
            }

            if (isset($form['location'])) {
                if ($form['location']->isValid()) {

                    $user->setLocation($form['location']->getData());
                } else return new Response('Ville Invalide', 400);
            }
            if (isset($form['title'])) {
                if ($form['title']->isValid()) {

                    $user->setTitle($form['title']->getData());
                } else return new Response('Titre Invalide', 400);
            }
            if (isset($form['description'])) {
                if ($form['description']->isValid()) {

                    $user->setDescription($form['description']->getData());
                } else return new Response('Description Invalide', 400);
            }
            if (isset($form['experience'])) {
                if ($form['experience']->isValid()) {

                    $user->setExperience($form['experience']->getData());
                } else return new Response('Expérience Invalide', 400);
            }
            if (isset($form['portfolio'])) {
                if ($form['portfolio']->isValid()) {

                    $user->setPortfolio($form['portfolio']->getData());
                } else return new Response('Portfolio Invalide', 400);
            }
            if (isset($form['picture'])) {
                if ($form['picture']->isValid()) {
                    /** @var UploadImage 
                     * $uploadedFile */
                    $uploadedFile = $form['picture']->getData();

                    dd($form['picture']);
                    $destination = $this->getParameter('kernel.project_dir') . '/public/uploads/Picture';
                    $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
                    $newFilename = $originalFilename . '-' . uniqid() . '.' . $uploadedFile->guessExtension();
                    $uploadedFile->move(
                        $destination,
                        $newFilename
                    );
                    $user->setPicture($newFilename);
                } else return new Response('Photo Invalide', 400);
            }
            if (isset($form['bannerpicture'])) {
                if ($form['bannerpicture']->isValid()) {
                    /** @var UploadImage 
                     * $uploadedFile */
                    $uploadedFile = $form['bannerpicture']->getData();

                    dd($form['bannerpicture']);
                    $destination = $this->getParameter('kernel.project_dir') . '/public/uploads/BannerPicture';
                    $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
                    $newFilename = $originalFilename . '-' . uniqid() . '.' . $uploadedFile->guessExtension();
                    $uploadedFile->move(
                        $destination,
                        $newFilename
                    );
                    $user->setBannerpicture($newFilename);
                } else return new Response('Bannière Invalide', 400);
            }
        }

        $user->setUpdatedAt(new \Datetime());

        $user = $this->getDoctrine()->getRepository(User::class)->findOneBy(["id" => $id]);

        // On sauvegarde en base
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        // On retourne la confirmation
        return new Response('ok', 201);
    }

    /**
     * @Route("/announcement/{id}", name="read_announcement", requirements={"id": "\d+"},  methods={"GET"})
     */
    public function readAnnouncement(AnnouncementRepository $announcementRepository, User $user, SerializerInterface $serializer, $id)
    {
        $announcement = $announcementRepository->findBy(array('user' => $id));

        if (!empty($announcement)) {
            return $this->json($serializer->normalize(
                $announcement,
                null,
                ['groups' => ['announcement']]
            ));
        } else {
            return new Response("L'annonce n'est pas en base de données  ", 404);
        }
    }
}
