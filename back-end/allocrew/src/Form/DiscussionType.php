<?php

namespace App\Form;

use App\Entity\Announcement;
use App\Entity\User;
use App\Entity\Discussion;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DiscussionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('announcement', EntityType::class, [
                // looks for choices from this entity
                'class' => Announcement::class,
               
                ])
            ->add('receiver', EntityType::class, [
                // looks for choices from this entity
                'class' => User::class,
               
                ])
            ->add('creator', EntityType::class, [
                // looks for choices from this entity
                'class' => User::class,
               
                ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Discussion::class,
        ]);
    }
}
