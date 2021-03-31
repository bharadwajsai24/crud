<?php 
require_once APPPATH . 'models/BaseModel.php';

class Login_Model extends Base_Model {
    
    public $table='users';

    function signin($data) {

         $this->db->get_where($this->table,$data);
         return $this->db->affected_rows();
    }

    function signup($data) {
        $this->db->get_where($this->table,array('email'=>$data['email']));
        if(($this->db->affected_rows()>=1))
        {
            return 0;
        }
        else
        {
        return $this->insert($data);
        }

    }
}
?>