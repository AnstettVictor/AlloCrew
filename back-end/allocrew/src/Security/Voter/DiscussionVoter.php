<?php

namespace App\Security\Voter;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;

class DiscussionVoter extends Voter
{
    protected function supports($attribute, $subject)
    {
        // replace with your own logic
        // https://symfony.com/doc/current/security/voters.html
        return in_array($attribute, [ 'DISCUSSION_DELETE', 'DISCUSSION_READ'])
            && $subject instanceof \App\Entity\User;
    }

    protected function voteOnAttribute($attribute, $subject, TokenInterface $token)
    {
        $user = $token->getUser();
      
        // ... (check conditions and return true to grant permission) ...
        switch ($attribute) {
            case 'DISCUSSION_READ':
                // logic to determine if the user can EDIT
                
                if ($user->getDiscussionsCreated() == $subject->getDiscussionsCreated()) {
                    return true;
                }

                if ($user->getDiscussionsReceived() == $subject->getDiscussionsReceived()) {
                    return true;
                }
                    
                if (in_array('ROLE_ADMIN', $user->getRoles())) {
                    return true;
                }
               
                break;
            case 'DISCUSSION_DELETE':
   
                if (in_array('ROLE_ADMIN', $user->getRoles())) {
                    return true;
                }
               
                break;
        }

        return false;
    }
}
