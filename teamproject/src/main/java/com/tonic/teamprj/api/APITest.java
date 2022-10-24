package com.tonic.teamprj.api;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

import org.json.JSONObject;

public class APITest {
	private String key = "e%2BnonJ082FY6zfX%2Btup0hvcGTRAqHZV2OGGnVkjpa%2BzYdVpUYTHuuqfHYuIEzFwYXjbQXAhQa9tTuyiYdd0Eyw%3D%3D";
	private String key2 = "e+nonJ082FY6zfX+tup0hvcGTRAqHZV2OGGnVkjpa+zYdVpUYTHuuqfHYuIEzFwYXjbQXAhQa9tTuyiYdd0Eyw==";
//	private final String HOST = "http://apis.data.go.kr/B551011/KorService";
	public void selectAroundPlace(String x, String y) throws Exception{
		String serviceKey = URLEncoder.encode(key2, "UTF-8");
		String host = "http://apis.data.go.kr/B551011/KorService/locationBasedList";
		String param = "?serviceKey=" + serviceKey + "&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json"
				+ "&mapX=" + x + "&mapY=" + y + "&radius=" + 1000 + "&contentTypeId=" + 12;		
		
		URL url = new URL(host + param);
		HttpURLConnection connection = (HttpURLConnection) url.openConnection();
		connection.setRequestMethod("GET");
		connection.setDoOutput(true);
		
		System.out.println(url.toString());
		StringBuilder response = new StringBuilder();
		BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
		
		String temp = "";
		
		while((temp = in.readLine()) != null) {	 
			response.append(temp);
		}
		in.close();
		
		String data = response.toString();
		JSONObject json = new JSONObject(data);
		
		System.out.println(json);
	}
}
