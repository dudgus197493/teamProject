package com.tonic.teamprj;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.tonic.teamprj.api.APITest;

@WebServlet("/select/aroundPlace")
public class SelectAroundPlaceServlet extends HttpServlet{
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String Xinput = req.getParameter("x");
		String Yinput = req.getParameter("y");
		
		APITest api = new APITest();
		try {
			api.selectAroundPlace(Xinput, Yinput);
		}catch(Exception e) {
			e.printStackTrace();
		}

		System.out.printf("%s , %s", Xinput, Yinput);
	}
}
