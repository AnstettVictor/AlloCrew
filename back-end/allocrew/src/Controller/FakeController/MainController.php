<?php

namespace App\Controller\FakeController;

use App\Form\AnnouncementType;
use App\Form\UserType;
use App\Services\ImageUpload;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\String\Slugger\SluggerInterface;

class MainController extends AbstractController
{
  
    /**
     * @Route("/form", name="demo")
     */
    public function Form(Request $request, ImageUpload $imageUploader)
    {
        $form = $this->createForm(UserType::class);

        $form->handleRequest($request);

        if($form->isSubmitted()){
            $em = $this->getDoctrine()->getManager();
            $file = $form['picture']->getData();
            

            $directory = 'uploads/BannerPicture';
            $imageUploader->upload($file, $directory);
           
            $newname = dd($this);
            
            $em->flush();
        }
       // }


        return $this->render('fake_controller/main/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }


}
