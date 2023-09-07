/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.web.controllers;

import com.web.service.TransporttruckService;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author Admin
 */
@Controller
@ControllerAdvice
public class ViewTransporttruckControler {
    
    @Autowired
    private Environment env;

    @Autowired
    private TransporttruckService transService;

    @RequestMapping("/viewTransporttruck")
    public String ViewTransporttruckControler(Model model, @RequestParam Map<String, String> params) {
        model.addAttribute("transts", this.transService.getTransporttruck(params));

        int count = this.transService.countTransporttruck();
        int pageSize = Integer.parseInt(env.getProperty("PAGE_SIZE").toString());
        model.addAttribute("pages", Math.ceil(count * 1.0 / pageSize));

        return "viewTransporttruck";
    }
}
