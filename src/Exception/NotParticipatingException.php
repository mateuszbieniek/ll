<?php

namespace App\Exception;

class NotParticipatingException extends \Exception
{
    public function __construct($message = "")
    {
        parent::__construct($message);
    }
}
