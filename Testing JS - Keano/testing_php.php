<html>
    <head>
        <title>Add a Topic</title>
    </head>
    <body>
        <h1>Add a Topic</h1>
        <form method=post action="do_addtopic.php">
        <p><strong>Your E-Mail Address:</strong><br>
        <input type="text" name="topic_owner" size=40 maxlength=150>
        <p><strong>Topic Title:</strong><br>
        <input type="text" name="topic_title" size=40 maxlength=150>
        <P><strong>Post Text:</strong><br>
        <textarea name="post_text" rows=8 cols=40 wrap=virtual></textarea>
        <P><input type="submit" name="submit" value="Add Topic"></p>
        </form>
    </body>

    <?php

    $myFile = "filename.html"; // or .php   
    $fh = fopen($myFile, 'w'); // or die("error");  
    $stringData = "your html code php code goes here";   
    fwrite($fh, $stringData);
    fclose($fh);

    ?>

</html>