<?php

namespace App\Controller\FakeController;

use App\Form\AnnouncementType;
use App\Form\UserType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\String\Slugger\SluggerInterface;

class MainController extends AbstractController
{
  
    /**
     * @Route("/form", name="demo")
     */
    public function Form(Request $request)
    {
        $form = $this->createForm(UserType::class);

        $form->handleRequest($request);

        // if ($form->isSubmitted() && $form->isValid()) {
        // On décode les données envoyées
        $donnees = json_decode($request->getContent(), true);
        /** On verifie si la propriété est envoyé dans le json si oui on hydrate l'objet 
        * sinon on passe à la suite */
        
        $form = $this->createForm(UserType::class);
        $ddd = $form->submit($donnees);
      
            $em = $this->getDoctrine()->getManager();
            /** @var UploadImage 
             * $uploadedFile */
            
            $uploadedFile = $form['picture']->getData();
            $destination = $this->getParameter('kernel.project_dir').'/public/uploads/Picture';
            $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            $newFilename = $originalFilename.'-'.uniqid().'.'.$uploadedFile->guessExtension();
            $uploadedFile->move(
                $destination,
                $newFilename
            );
            $em->flush();
            
       // }


        return $this->render('announcement/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }


}
