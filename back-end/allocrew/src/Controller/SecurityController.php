<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * @Route("api/login_check", name="app_login",  methods={"POST"} )
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
       
        $user = $this->getUser();

        return new Response ([
            'roles' => $user->getRoles(),
            'id' => $user->getId()
        ]);

    }

    /**
     * @Route("/api/token_check", name="app_token_check",  methods={"POST"} )
     */
    public function token_check(): Response
    {
       // On retourne la confirmation
       return new Response('token ok', 201);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
