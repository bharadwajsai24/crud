<?php

require_once APPPATH . 'controllers/Base_Controller.php';

class Login_Controller extends Base_Controller
{

    function __construct() {
        parent::__construct();
        $this->load->model('Login_Model');
    }

    
    function login_post() {

        $input = file_get_contents('php://input');
        $data = json_decode($input, TRUE);
        if (!$this->validateEmail($data['email'])) {
            $this->invalidEmailResponse();
            return;
        }
        $res = $this->Login_Model->signin($data);
        $tokendata = $this->authorization_token->generateToken($data);
        if ($res > 0) {
            $this->responsemessage('Login Succeess', 'true', ['token' => $tokendata]);
        } 
        else {
            $this->responsemessage('Login Failed', 'false', []);
        }
    }


    function signup_post() {

        $input = file_get_contents('php://input');
        $data = json_decode($input, TRUE);
        $data['created_at'] = date('Y-m-d');
        $res = $this->Login_Model->signup($data);
        if (!$this->validateEmail($data['email'])) {
            $this->invalidEmailResponse();
            return;
        }
        if (!$this->validatePassword($data['password'])) {
            $this->invalidPasswordResponse();
            return;
        }
        if ($res > 0) {
            $this->responsemessage('Registration Succeess', 'true', []);
        } 
        else {
            $this->responsemessage('Registration Failed', 'false', []);
        }
    }

}
?>
