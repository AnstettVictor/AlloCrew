<?php

namespace App\Form;

use App\Entity\User;
use App\Entity\Announcement;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\Date;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Validator\Constraints\Length;

class AnnouncementType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('category', TextType::class, [
                'constraints' => [
                    new NotBlank(),
                    new Length([
                        'min' => 0,
                        'max' => 2,
                    ])
                    ]
            ])
            ->add('active', ChoiceType::class, [
                'choices' => [
                    'Yes' => true, 'No' => false]])
            ->add('voluntary' , ChoiceType::class, [
                'choices'  => [
                    'Rémunéré' => false,
                    'Bénévole' => true,
                ],
                'label' => 'Evènement rémunéré ou bénévole ?',
            ])
            ->add('date_start', DateTimeType::class, [
                'constraints' => new Date(),
                'label' => 'Cet évènement commencera le  ',
                'widget' => 'single_text',
                //default format of the date 
                'format' => 'yyyy-MM-dd',

                // prevents rendering it as type="date", to avoid HTML5 date pickers
                'html5' => false,

                // adds a class that can be selected in JavaScript
                'attr' => ['class' => 'js-datetimepicker']
            ])
            ->add('date_end', DateType::class, [
                'constraints' => new Date(),
                'label' => 'Cet évènement se terminera le ',
                'widget' => 'single_text',
                //default format of the date 
                'format' => 'yyyy-MM-dd',

                // prevents rendering it as type="date", to avoid HTML5 date pickers
                'html5' => false,

                // adds a class that can be selected in JavaScript
                'attr' => ['class' => 'js-datepicker']
            ])
            ->add('location')
            ->add('title', TextType::class, [
                'constraints' => [
                    new NotBlank(),
                    new Length([
                        'min' => 0,
                        'max' => 3,
                    ])
                    ]
            ])
            ->add('description')
            ->add('picture', FileType::class, [
                'constraints' => new File(),
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
            'data_class' => Announcement::class,
        ]);
    }
}
