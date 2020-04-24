<?php

namespace App\Form;

use App\Entity\User;
use App\Entity\Announcement;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;

class AnnouncementType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('category', TextType::class, [
                'constraints' => [
                    new Length([
                        'min' => 0,
                        'max' => 30,
                    ]),
                    new Regex([
                        'pattern' => '/[!#$%^&*()?"{}|<>]/',
                        'match' => false,
                    ]),
                ]
            ])
            ->add('active')
            ->add('voluntary')
            ->add('date_start', DateTimeType::class, [
                'label' => 'Cet évènement commencera le ',
                'widget' => 'single_text',
                // 'format' => 'yyyy-MM-dd H:mm:ss',
                'html5' => false,
                'attr' => ['class' => 'js-datepicker']
            ])
            ->add('date_end', DateTimeType::class, [
                'label' => 'Cet évènement se terminera le ',
                'widget' => 'single_text',
                // 'format' => 'yyyy-MM-dd H:mm:ss',
                'html5' => false,
                'attr' => ['class' => 'js-datepicker']
                
            ])
            ->add('location', TextType::class, [
                'constraints' => [
                    new Regex([
                        'pattern' => '/[!#$%^&*()?"{}|<>]/',
                        'match' => false,
                    ])
                ]

            ])
            ->add(
                'title',
                TextType::class  
            )
            ->add('description', TextType::class)
            ->add('picture', TextType::class)
            // ->add('picture', FileType::class, [
            //     'constraints' => new File(),
            // 'required' => false,
            // 'mapped' => false])
            
            ->add('user', EntityType::class, [
                // looks for choices from this entity
                'class' => User::class,

            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Announcement::class,
            'csrf_protection' => false,
        ]);
    }
}
