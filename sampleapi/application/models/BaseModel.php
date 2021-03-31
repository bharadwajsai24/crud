<?php

class Base_Model extends CI_model {

   public $table = '';

    public function __construct() {
        parent::__construct();
    }

    public function get_all() {
        return $this->db->get($this->table)->result();
    }

    public function get_by_id($id) {
        return $this->db->get_where($this->table, array('id' => $id))->row();
        
    }

    public function insert($data) {
         $this->db->insert($this->table, $data);
         return $this->db->affected_rows();
    }

    public function update($id, $data) {
        $this->db->update($this->table, $data, array('id' => $id));
        return $this->db->affected_rows();
    }

    public function delete($id) {
        $this->db->where('id', $id);
        $this->db->delete($this->table);
        return $this->db->affected_rows();
    }
}

?>