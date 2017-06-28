




 def show
 end 

 def create
   @comment = new_comment

   if @comment.save
     redirect_to comment_url(@comment)
     render :show(@comment)

 end
