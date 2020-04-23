<?php

namespace App\Controller\Admin;

use App\Entity\Announcement;
use App\Repository\AnnouncementRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
     * @Route("/admin/announcements", name="admin_announcements_")
     */
class AdminAnnouncementController extends AbstractController
{
    /**
     * @Route("/", name="index", methods={"GET"})
     */
    public function index(AnnouncementRepository $announcementRepository): Response
    {
        return $this->render('admin/announcement/index.html.twig', [
            'announcements' => $announcementRepository->findAll(),
        ]);
    }


    /**
     * @Route("/{id}", name="delete", methods={"DELETE"})
     */
    public function delete(Request $request, Announcement $announcement): Response
    {
        if ($this->isCsrfTokenValid('delete'.$announcement->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($announcement);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_announcements_index');
    }
}


