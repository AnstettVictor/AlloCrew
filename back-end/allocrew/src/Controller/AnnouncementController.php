<?php

namespace App\Controller;

use App\Entity\Announcement;
use App\Form\AnnouncementType;
use App\Repository\AnnouncementRepository;
use App\Utils\GetErrorsFromForm;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/api/announcements", name="api_announcements_")
 */
class AnnouncementController extends AbstractController
{
    /**
     * @Route("/", name="browse", methods={"GET"})
     */
    public function browse(AnnouncementRepository $announcementRepository,  SerializerInterface $serializer)
    {
        $announcements = $announcementRepository->findAll();

        return $this->json($serializer->normalize(
            $announcements,
            null,
            ['groups' => ['announcement']]
        ));
    }

    /**
     * @Route("/{id}", name="read", requirements={"id": "\d+"},  methods={"GET"})
     */
    public function read(AnnouncementRepository $AnnouncementRepository, $id, SerializerInterface $serializer)
    {
        $announcement = $AnnouncementRepository->findBy(array('id' => $id));

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

    /**
     * @Route("/{id}", name="edit", methods={"PATCH"}, requirements={"id": "\d+"})
     *
     */
    public function edit(Announcement $announcement, Request $request, GetErrorsFromForm $getErrorsFromForm,$id)
    {
        $this->denyAccessUnlessGranted('ANNOUNCEMENT_EDIT', $announcement);

        $donnees = json_decode($request->getContent(), true);
       
       

        $form = $this->createForm(AnnouncementType::class, $announcement);
        
        $form->submit($donnees, false);
        
       
        if ($form->isValid()) {
            $announcement->setUpdatedAt(new \DateTime);
            // if ($form['picture']->isSubmitted() && $form['picture']->isValid()){
            //     /** @var UploadImage 
            //      * $uploadedFile */
                
            //     $uploadedFile = $form['picture']->getData();
            //     $destination = $this->getParameter('kernel.project_dir').'/public/uploads/AnnouncementPicture';
            //     $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            //     $newFilename = $originalFilename.'-'.uniqid().'.'.$uploadedFile->guessExtension();
            //     $uploadedFile->move(
            //         $destination,
            //         $newFilename
            //     );}
            $em = $this->getDoctrine()->getManager();
            $em->persist($announcement);
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
     * @Route("/", name="add", methods={"POST"})
     */
    public function add(Request $request, GetErrorsFromForm $getErrorsFromForm)
    {
        $announcement = new Announcement();

        // On décode les données envoyées
        $donnees = json_decode($request->getContent(), true);
        /** On verifie si la propriété est envoyé dans le json si oui on hydrate l'objet 
         * sinon on passe à la suite */
        $form = $this->createForm(AnnouncementType::class, $announcement);
        $form->submit($donnees);
       
        if ($form->isValid()) {
            $announcement->setCreatedAt(new \DateTime);
            // if ($form['picture']->isSubmitted() && $form['picture']->isValid()){
            // /** @var UploadImage 
            //  * $uploadedFile */
            
            // $uploadedFile = $form['picture']->getData();
            // $destination = $this->getParameter('kernel.project_dir').'/public/uploads/AnnouncementPicture';
            // $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            // $newFilename = $originalFilename.'-'.uniqid().'.'.$uploadedFile->guessExtension();
            // $uploadedFile->move(
            //     $destination,
            //     $newFilename
            // );}
            $em = $this->getDoctrine()->getManager();
            $em->persist($announcement);
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
    public function delete(Announcement $announcement)
    {
        
        $this->denyAccessUnlessGranted('ANNOUNCEMENT_DELETE', $announcement);

        $em = $this->getDoctrine()->getManager();

        $em->remove($announcement);
        $em->flush();

        // On retourne la confirmation
        return new Response('supression ok', 200);
    }
}
