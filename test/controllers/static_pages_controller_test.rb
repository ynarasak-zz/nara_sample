require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get archives" do
    get static_pages_archives_url
    assert_response :success
  end

end
