<?php

namespace App\Controller\FakeController;

use App\Form\AnnouncementType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainController extends AbstractController
{
  
    /**
     * @Route("/form", name="demo")
     */
    public function Form(Request $request)
    {
        $form = $this->createForm(AnnouncementType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();


            $em->flush();
            
        }


        return $this->render('announcement/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }


}
