<?php

namespace App\Controller\Admin;

use App\Repository\UserRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin", name="admin_")
     */
    public function index(UserRepository $userRepository)
    {
        
        $users = $userRepository->findBy();

        return $this->render('admin/admin/index.html.twig' , [
            'users' => $users]);
        
    }
}
