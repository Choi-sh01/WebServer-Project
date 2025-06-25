package com.localletter.localletter.controller;

import com.localletter.localletter.domain.ContactMessage;
import com.localletter.localletter.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")  // 프론트와 포트 다를 경우 필요
public class ContactMessageController {
    @GetMapping
    public List<ContactMessage> getAllMessages() {
        return contactMessageRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    @Autowired
    private ContactMessageRepository contactMessageRepository;

    @PostMapping
    public ContactMessage receiveContact(@RequestBody ContactMessage message) {
        return contactMessageRepository.save(message);

    }
}
