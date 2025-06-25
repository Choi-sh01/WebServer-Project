// ContactMessageRepository.java
package com.localletter.localletteradmin.repository;

import com.localletter.localletteradmin.domain.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {
}
