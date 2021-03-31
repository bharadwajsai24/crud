<?php


    require_once APPPATH . 'controllers/Base_Controller.php';
   
    class Player_Controller extends Base_Controller
        {


            public function __construct() {
                parent::__construct();
                $this->load->model('Player_Model');
                $this->load->library('Authorization_Token');
            }
            /*
                * response format {"status":"","message":"","data":[] } 
                * 
                * 
                */


            function addPlayer_post()  {

              
                $input = file_get_contents('php://input');
                $data = json_decode($input, TRUE);
                $data['id'] = NULL;
                $data['created_at'] = date('Y-m-d');
                $res = $this->Player_Model->createplayer($data);
                if ($res > 0) {
                    $this->responsemessage('Player Added Successfully', 'true', []);
                } else {
                    $this->responsemessage('Player Insertion Failed', 'false', []);
                }
            }


            function deletePlayer_delete($id) {

                $res = $this->Player_Model->deleteplayer(($id));
                if ($res > 0) {
                    $this->responsemessage('Player Deleted Successfully', 'true', []);
                } 
                else {
                    $this->responsemessage('Player IDeletion Failed', 'false', []);
                }

            }

            function updatePlayer_put($id)  {

                $input = file_get_contents('php://input');
                $data = json_decode($input, TRUE);
                log_message('Error',$data['name']);
                $data['created_at'] = time();
                $res = $this->Player_Model->updateplayer($id,$data);
                if ($res > 0) {
                    $this->responsemessage('Player Updated Successfully', 'true', []);
                } 
                else {
                    $this->responsemessage('Player Updation Failed', 'false', []);
                
                }

            }


            function showAllPlayers_get()  {

                $res = $this->Player_Model->showallplayers();
                $this->responsemessage('data fetched Successfully', 'true', $res);

            }

            function showSinglePlayer_get($id) {

                $res = $this->Player_Model->showsingleplayer($id);
                $res = ($res === 0) ? [] : $res;
                $this->responsemessage('data fetched Successfully', 'true', $res);

            }

    }
?>