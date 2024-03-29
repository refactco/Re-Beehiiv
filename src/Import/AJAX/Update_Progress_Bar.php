<?php // phpcs:ignore Squiz.Commenting.FileComment.Missing
namespace Integration_Toolkit_For_Beehiiv\Import\AJAX;

use Integration_Toolkit_For_Beehiiv\Import\Import;
use Integration_Toolkit_For_Beehiiv\Lib\Logger;

/**
 * AJAX Bulk Process
 * This class is responsible for handling AJAX requests for the Bulk Process
 */
class Update_Progress_Bar extends \Integration_Toolkit_For_Beehiiv\Lib\AJAX {

    /**
    * AJAX action name
    *
    * @var string
    */
    protected $action = 'update_progress_bar';

    /**
     * Logger instance
     *
     * @var Logger
     */
    protected Logger $logger;

    public function handle_request() {
        $this->update_progress_bar();
    }
    
    /**
    * Update progress bar
    *
    * @return void
    */
    protected function update_progress_bar() {
        $import_progress = Import::get_import_progress();

        $this->logger        = new Logger( $import_progress['group_name'] );

        $import = new Import( $import_progress['form_data'], $import_progress['group_name'], $import_progress['method'] );

        $this->send_response();
        
        exit;
    }

    protected function send_response( $status = 'success' ) {
        $response = array(
            'data'   => Import::get_import_progress(),
            'logs'   => $this->logger->get_logs(),
            'status' => $status
        );
        wp_send_json( $response );
    }
    
}