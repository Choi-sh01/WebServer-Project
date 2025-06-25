// ContactMessageController.java
package com.localletter.localletteradmin.controller;

import com.localletter.localletteradmin.repository.ContactMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/contact")
public class ContactMessageController {

    private final ContactMessageRepository contactMessageRepository;

    @GetMapping("/list")
    public String showContactList(Model model) {
        model.addAttribute("messages", contactMessageRepository.findAll());
        return "contactList";
    }
}
