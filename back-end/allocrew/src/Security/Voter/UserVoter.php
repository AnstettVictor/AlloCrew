<?php

namespace App\Security\Voter;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;

class UserVoter extends Voter
{
    protected function supports($attribute, $subject)
    {
        // replace with your own logic
        // https://symfony.com/doc/current/security/voters.html
        return in_array($attribute, ['USER_ACCOUNT_EDIT', 'USER_PASSWORD_EDIT' , 'USER_EDIT'])
            && $subject instanceof \App\Entity\User;
    }

    protected function voteOnAttribute($attribute, $subject, TokenInterface $token)
    {
        $user = $token->getUser();

        // ... (check conditions and return true to grant permission) ...
        switch ($attribute) {
            case 'USER_ACCOUNT_EDIT':
                 // logic to determine if the user can EDIT
                 if ($user == $subject) {
                    return true;
                }
                    
                if (in_array('ROLE_ADMIN', $user->getRoles())) {
                    return true;
                }
                break;
            case 'USER_PASSWORD_EDIT':
                // logic to determine if the user can EDIT
                if ($user == $subject) {
                    return true;
                }
                    
                if (in_array('ROLE_ADMIN', $user->getRoles())) {
                    return true;
                }
                break;
            case 'USER_EDIT':
                // logic to determine if the user can EDIT
                if ($user == $subject) {
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
