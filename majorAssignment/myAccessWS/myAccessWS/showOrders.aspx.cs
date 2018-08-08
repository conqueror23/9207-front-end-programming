using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.OleDb;

public partial class showMarks : System.Web.UI.Page
{

    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["loggedIn"] == "true")
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
                sqlCommand = "SELECT * FROM orders WHERE customerID='" + Session["username"] + "'";
                //lblStatus.Text = sqlCommand;
                cmd = new OleDbCommand(sqlCommand, conn);
                reader = cmd.ExecuteReader();
                user_info.Text = "Welcome " + Session["username"] + ", your order conditions are listing below:";
                GridView1.DataSource = reader;
                GridView1.DataBind();
                


            }
            catch (Exception ex)
            {
                Label1.Text = "An error occured: " + ex.Message;
            }
            finally
            {
                if (reader != null)
                    reader.Close();
                if (conn != null)
                    conn.Close();
            }
        }
        else
        {
            Label1.Text = "You are not authorised";
            Response.Redirect("Default.aspx");
        }
        
    } 
    protected void Advance_Click(object sender, EventArgs e)
    {
        Response.Redirect("editing.aspx");
    }
    /*
    public void fillgrid()
    {
        OleDbDataReader reader= null;
        GridView1.DataSource =reader ;
        GridView1.DataBind();
    }
    protected void Info_Click(object sender,EventArgs s)
    {
        //Response.Redirect("editing.aspx");
    }
    protected void Order_Click(object sender,EventArgs s)
    {
        Response.Redirect("editiong.aspx");
    }


   
    protected void GridView1_RowEditing(object sender, GridViewEditEventArgs e)
    {
        GridView1.EditIndex = e.NewEditIndex;
        
    }

    protected void GridView1_RowDeleting(object sender, GridViewDeleteEventArgs e)
    {
        
        string id = ((Label)GridView1.Rows[e.RowIndex].FindControl("Label")).Text;
        string s = "delete from orders where id=" + id;
    
        fillgrid();
    }
    */
}