<?php

namespace App\Controller\FakeController;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="fake_controller_main")
     */
    public function index()
    {
        return $this->render('fake_controller/main/index.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }
}
