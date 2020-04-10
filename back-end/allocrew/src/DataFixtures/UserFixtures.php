<?php

namespace App\DataFixtures;

use Nelmio\Alice\Loader\NativeLoader;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;


class UserFixtures extends Fixture
{
    public function load(ObjectManager $em)
    {
        $loader = new NativeLoader();
        
        //importe le fichier de fixtures et récupère les entités générés
        $entities = $loader->loadFile(__DIR__. '/fixtures.yaml')->getObjects();
      
        //empile la liste d'objet à enregistrer en BDD
        foreach ($entities as $entity) {
            $em->persist($entity);
        };
        
        //enregistre
        $em->flush();
    }
}
