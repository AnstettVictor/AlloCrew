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
    public function account(UserRepository $userRepository , SerializerInterface $serializer,  $id)
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
    public function passwordEdit(User $user, Request $request,UserPasswordEncoderInterface $encoder)
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
            /** @var UploadImage 
             * $uploadedFile */
            $uploadedFile = $donnees->picture->getData();
            $destination = $this->getParameter('kernel.project_dir').'/public/uploads/Picture';
            $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            $newFilename = ($originalFilename->camel()).'-'.uniqid().'.'.$uploadedFile->guessExtension();
            $uploadedFile->move(
                $destination,
                $newFilename
            );
            $user->setPicture($newFilename);
        }
        if (isset($donnees->bannerpicture)) {
            /** @var UploadImage 
             * $uploadedFile */
            $uploadedFile = $donnees->bannerpicture->getData();
            $destination = $this->getParameter('kernel.project_dir').'/public/uploads/BannerPicture';
            $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            $newFilename = ($originalFilename->camel()).'-'.uniqid().'.'.$uploadedFile->guessExtension();
            $uploadedFile->move(
                $destination,
                $newFilename
            );
            $user->setBannerPicture($newFilename);
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
