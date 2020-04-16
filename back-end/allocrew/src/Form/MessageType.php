<?php

namespace App\Form;

use App\Entity\User;
use App\Entity\Message;
use App\Entity\Discussion;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class MessageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('content', TextareaType::class, [
                'constraints' => [
                    new NotBlank(),
                    
                ]])
            ->add('discussion', EntityType::class, [
                // looks for choices from this entity
                'class' => Discussion::class,
               
                ])
            ->add('user', EntityType::class, [
                // looks for choices from this entity
                'class' => User::class,
               
                ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Message::class,
        ]);
    }
}
