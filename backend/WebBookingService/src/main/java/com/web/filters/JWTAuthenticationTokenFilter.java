/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.web.filters;

import com.web.components.JWTService;
import com.web.pojo.Staff;
import com.web.service.StaffService;
import java.io.IOException;
import java.text.ParseException;
import java.util.HashSet;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;

/**
 *
 * @author Admin
 */
public class JWTAuthenticationTokenFilter extends UsernamePasswordAuthenticationFilter {

    private static final String HEADER = "authorization";
    @Autowired
    private JWTService jWTService;
    @Autowired
    private StaffService staffService;

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String authToken = httpRequest.getHeader(HEADER);
        try {
            if (jWTService.validateTokenLogin(authToken)) {
                String username = jWTService.getUsernameFromToken(authToken);
                Staff staff = this.staffService.getCurrentStaff(username);
                if (staff != null) {
                    boolean enable = true;
                    boolean accountNonExpired = true;
                    boolean accountcredentialNonExpired = true;
                    boolean accountNonLocked = true;

                    Set<GrantedAuthority> authorities = new HashSet<>();
                    authorities.add((new SimpleGrantedAuthority(staff.getRoles().getNameRoles())));

                    UserDetails ud = new org.springframework.security.core.userdetails.User(username, staff.getPassWord(), enable, accountNonExpired,
                            accountcredentialNonExpired, accountNonLocked, authorities);

                    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(ud, null, ud.getAuthorities());
                    authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpRequest));
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            }
            chain.doFilter(request, response);
        } catch (ParseException ex) {
            Logger.getLogger(JWTAuthenticationTokenFilter.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

}
