<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Url;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', EmailType::class, [
                'constraints' => [
                    new NotBlank(),
                    new Email(),
                    new Regex([
                        'pattern' => '/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/',
                        'match' => true,
                    ])],
                'label' => 'Adresse e-mail',
            ])
            ->add('firstname', TextType::class, [
                'label' => 'Prénom',
                'required' => false,
                'empty_data' => false,
                'constraints' => new NotBlank

            ])
            ->add('lastname', TextType::class, [
                'label' => 'Nom', 
               

            ])
            ->add('age',  IntegerType::class, [            
                'label' => 'Âge',
            ])
            ->add('location', TextType::class, [
                'label' => 'Lieu',
               

            ])
            ->add('title', TextType::class, [
                'label' => 'Titre',
                

            ])
            ->add('description', TextType::class, [
                'label' => 'Description',
                
            ])
            ->add('experience', TextType::class, [
                'label' => 'Expérience',
                
            ])
            ->add('portfolio', UrlType::class, [
                'constraints' => [
                    new Url(),
                ],
                'label' => 'Lien vers votre Portfolio',   
            ])
            ->add('picture', TextType::class, [
                
            ])
            // ->add('picture', FileType::class, [
            //     'constraints' => new File(),
            //     'required' => false,
            //     'mapped' => false
                
            // ])
            ->add('bannerpicture', TextType::class, [

            ])
            // ->add('bannerpicture', FileType::class, [
            //     'constraints' => new File(),
            //     'required' => false,
            //     'mapped' => false
            // ])

        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'csrf_protection' => false,
        ]);
    }
}
