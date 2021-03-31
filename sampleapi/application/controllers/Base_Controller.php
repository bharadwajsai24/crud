<?php 

    require_once APPPATH . 'libraries/REST_Controller.php';

    class Base_Controller extends REST_Controller {

        function __construct() {

            parent :: __construct();
            $this->load->library('Authorization_Token');

        }


        function validateJwt() {

            $decodedtoken = $this->authorization_token->validateToken();
            if ($decodedtoken['status'] !== TRUE) {

                responsemessage($decodedtoken['message'], 'true', []);
                return false;
            }
            return true;
            
        }

        function validateEmail($email){

            $email=filter_var($email,FILTER_SANITIZE_EMAIL);
            return filter_var($email,FILTER_VALIDATE_EMAIL);
    
        }

        function invalidEmailResponse() {

            $response = array();
            $response["status"]="false";
            $response["message"]="Email should be valid";
            $response['data']=[];
            $this->set_response($response,REST_Controller::HTTP_OK);

        }

        function validatePassword($pass) {
            if(strlen($pass)<6)
            {
                return false;
            }
            return true;
        }

        function invalidPasswordResponse() {

            $response = array();
            $response["status"]="false";
            $response["message"]="Password must be atleast 6 characters";
            $response['data']=[];
            $this->set_response($response,REST_Controller::HTTP_OK);
            

        }

        function responsemessage($message,$status,$data) {

            $response = array();
            $response["status"]=$status;
            $response["message"]=$message;
            $response['data']=$data;
            $this->set_response($response,REST_Controller::HTTP_OK);

        }









    }
























    
    
    


   


   
?>