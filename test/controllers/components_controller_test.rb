require 'test_helper'

class ComponentsControllerTest < ActionDispatch::IntegrationTest
  test "should get content-index" do
    get components_content-index_url
    assert_response :success
  end

end
