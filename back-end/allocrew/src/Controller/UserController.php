<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Utils\GetErrorsFromForm;
use App\Repository\UserRepository;
use App\Repository\AnnouncementRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/api/users", name="api_users_")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/account/{id}", name="account", methods={"GET"})
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
    public function accountEdit(User $user, Request $request, GetErrorsFromForm $getErrorsFromForm)
    {
        $this->denyAccessUnlessGranted('USER_ACCOUNT_EDIT', $user);
        // On décode les données envoyées
        $donnees = json_decode($request->getContent(), true);
        /** On verifie si la propriété est envoyé dans le json si oui on hydrate l'objet 
         * sinon on passe à la suite */
        $form = $this->createForm(UserType::class, $user);

        $form->submit($donnees, false);

        if ($form->isValid()) {
            $user->setUpdatedAt(new \DateTime);
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
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
     * @Route("/password/{id}", name="account_edit_password", methods={"PATCH"})
     */
    public function passwordEdit(User $user, Request $request, UserPasswordEncoderInterface $encoder)
    {
        $this->denyAccessUnlessGranted('USER_PASSWORD_EDIT', $user);
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

        $user = $UserRepository->findAll();

        return $this->json($serializer->normalize(
            $user,
            null,
            ['groups' => ['userProfile']]
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
    public function edit(User $user, Request $request, GetErrorsFromForm $getErrorsFromForm)
    {
        
        $this->denyAccessUnlessGranted('USER_EDIT', $user);

        $donnees = json_decode($request->getContent(), true);

        $form = $this->createForm(UserType::class, $user);

        $form->submit($donnees,false);

        if ($form->isValid()) {
            $user->setUpdatedAt(new \DateTime);
            // if ($form['picture']->isSubmitted() && $form['picture']->isValid()) {
            //     /** @var UploadImage 
            //      * $uploadedFile */

            //     $uploadedFile = $form['picture']->getData();
            //     $destination = $this->getParameter('kernel.project_dir') . '/public/uploads/Picture';
            //     $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            //     $newFilename = $originalFilename . '-' . uniqid() . '.' . $uploadedFile->guessExtension();
            //     $uploadedFile->move(
            //         $destination,
            //         $newFilename
            //     );
            // }
            // if ($form['bannerpicture']->isSubmitted() && $form['bannerpicture']->isValid()) {
            //     /** @var UploadImage 
            //      * $uploadedFile */

            //     $uploadedFile = $form['bannerpicture']->getData();
            //     $destination = $this->getParameter('kernel.project_dir') . '/public/uploads/BannerPicture';
            //     $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            //     $newFilename = $originalFilename . '-' . uniqid() . '.' . $uploadedFile->guessExtension();
            //     $uploadedFile->move(
            //         $destination,
            //         $newFilename
            //     );
            // }
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();
            return new JsonResponse('ok', 200);
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
