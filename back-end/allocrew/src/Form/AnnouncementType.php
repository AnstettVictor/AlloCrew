<?php

namespace App\Form;

use DateTime;
use App\Entity\User;
use App\Entity\Announcement;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\Date;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
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
                        'max' => 30,
                    ]),
                    new Regex([
                        'pattern' => '/[!#$%^&*()?"{}|<>]/',
                        'match' => false,
                    ]),
                ], 'required' => false,
                'empty_data' => false

            ])
            ->add('active', ChoiceType::class, [
                'choices' => [
                    'Yes' => true, 'No' => false
                ]
            ])
            ->add('voluntary', ChoiceType::class, [
                'choices'  => [
                    'Rémunéré' => false,
                    'Bénévole' => true,
                ],
                'label' => 'Evènement rémunéré ou bénévole ?', 
                'required' => false
                ,'empty_data' => false
            ])
            ->add('date_start', DateTimeType::class, [
                'label' => 'Cet évènement commencera le ',
                'widget' => 'single_text',
                //default format of the date 
                'format' => 'yyyy-MM-dd',

                // prevents rendering it as type="date", to avoid HTML5 date pickers
                'html5' => false,

                // adds a class that can be selected in JavaScript
                'attr' => ['class' => 'js-datepicker']
                
            ])
            ->add('date_end', DateTimeType::class, [
                'label' => 'Cet évènement se terminera le ',
                'widget' => 'single_text',
                //default format of the date 
                'format' => 'yyyy-MM-dd',

                // prevents rendering it as type="date", to avoid HTML5 date pickers
                'html5' => false,

                // adds a class that can be selected in JavaScript
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
                TextType::class,
                [
                     'required' => false
                    ,'empty_data' => false
                ]
                
            )
            ->add('description', TextType::class)
            ->add('picture', FileType::class, [
                'constraints' => new File(),
            ])
            ->add('user', EntityType::class, [
                // looks for choices from this entity
                'class' => User::class,

            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Announcement::class,
        ]);
    }
}
