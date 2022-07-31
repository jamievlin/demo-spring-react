package th.`in`.jamievl.demospringboot.routing.api

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1")
class TextFetcher {

    @RequestMapping(value=["/text"], method=[RequestMethod.GET])
    fun getText(): String {

        return "hello there"
    }
}
