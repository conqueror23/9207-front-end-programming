using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.OleDb;

public partial class register : System.Web.UI.Page
{
    protected void Button1_Click(object sender, EventArgs e)
    {
        OleDbConnection conn = null;
        OleDbCommand cmd = null;
        OleDbDataReader reader = null;
        string sqlCommand;
        try
        {
            conn = new OleDbConnection("Provider=Microsoft.ACE.OLEDB.12.0; Data Source="
                + Server.MapPath("pcparts.accdb"));
            conn.Open();
            sqlCommand = "Insert into customers (username,psw) Values('"+newAccount.Text+"','"+newPass.Text+"')";
            cmd = new OleDbCommand(sqlCommand, conn);
            cmd.ExecuteNonQuery();
            //check if the user has been exist
            reader = cmd.ExecuteReader();
           
           
        }
        catch(Exception ex)
        {
            instruction.Text = "An error occured: "+ex.Message;
        }
        finally
        {
            if (reader != null) 
                reader.Close();
            if (conn != null)
                conn.Close();
            Response.Redirect("Default.aspx");
        }
    }

    protected void newAccount_TextChanged(object sender, EventArgs e)
    {

    }
}