<?php
namespace App\Utils;
use Symfony\Component\Form\FormInterface;
class GetErrorsFromForm
{
    public function getErrors(FormInterface $form){
        $errors = array();
        foreach ($form->getErrors() as $error) {
            $errors[] = $error->getMessage();
        }
        foreach ($form->all() as $childForm) {
            if ($childForm instanceof FormInterface) {
                if ($childErrors = $this->getErrors($childForm)) {
                    $errors[$childForm->getName()] = $childErrors;
                }
            }
        }
        return $errors;
    }
}


