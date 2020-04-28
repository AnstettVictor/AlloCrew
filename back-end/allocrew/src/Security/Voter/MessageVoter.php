<?php

namespace App\Security\Voter;

use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class MessageVoter extends Voter
{
    protected function supports($attribute, $subject)
    {
        // replace with your own logic
        // https://symfony.com/doc/current/security/voters.html
        return in_array($attribute, ['MESSAGE_EDIT', 'MESSAGE_DELETE'])
            && $subject instanceof \App\Entity\Message;
    }

    protected function voteOnAttribute($attribute, $subject, TokenInterface $token)
    {
        $user = $token->getUser();

        // ... (check conditions and return true to grant permission) ...
        switch ($attribute) {
            case 'MESSAGE_EDIT':
                // logic to determine if the user can EDIT
                if ($user == $subject->getUser()) {
                    return true;
                }
                    
                if (in_array('ROLE_ADMIN', $user->getRoles())) {
                    return true;
                }
               
                break;
            case 'MESSAGE_DELETE':
                // logic to determine if the user can DELETE
                if ($user == $subject->getUser()) {
                    return true;
                }
                    
                if (in_array('ROLE_ADMIN', $user->getRoles())) {
                    return true;
                }
               
                break;
        }

        return false;
    }
}
