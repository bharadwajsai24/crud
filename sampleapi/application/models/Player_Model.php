<?php
require APPPATH . 'models/BaseModel.php';

    class Player_Model extends Base_Model {

        public $table='ipl';

        function createplayer($data) {
            return $this->insert($data);
        }

        function deleteplayer($id) {
            return $this->delete($id);
        }

        function updateplayer($id,$data) {
            return $this->update($id,$data);
        }

        function showallplayers() {
            return $this->get_all();
        }

        function showsingleplayer($id) {
            $data=$this->get_by_id($id);
           
            return $data;
            
        }

    }

?>