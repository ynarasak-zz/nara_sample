class StaticPagesController < ApplicationController
  def archives
    #binding.pry
    @archive_id = params[:id]
    if @archive_id == '12345' || @archive_id == '11111'
      render :layout => nil, template: "static_pages/"+@archive_id
    end
  end
end
