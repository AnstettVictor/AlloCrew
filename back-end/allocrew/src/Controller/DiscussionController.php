<?php

namespace App\Controller;

use App\Repository\MessageRepository;
use App\Repository\DiscussionRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;



/**
 * @Route("/api/discussions", name="api_discussions_")
 */
class DiscussionController extends AbstractController
{
     /**
     * @Route("/{id}", requirements={"id": "\d+"}, name="browse", methods={"GET"})
     */
    public function read(MessageRepository $messageRepository, DiscussionRepository $discussionRepository, $id, SerializerInterface $serializer)
    {
        $discussions = $discussionRepository->findAllForDiscussions($id);
        $messages = $messageRepository->findByDiscussion($id);
    /**
    * data stocke toutes les données qui seront transformées en json
    */
       
      
    $arr = array();
    foreach($discussions as $row) {
    $arr['discussion'] = $row;
    }



    foreach ($messages as $rows) {

        $arr['discussion']['message'][] = $rows;

        }
     // Crée un tableau imbriqué
  
    // Chaque tableau sera converti en objet
   

    return new JsonResponse($arr);


    }
    
   
  
   
}
