<?php

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @UniqueEntity(fields={"email"}, message="There is already an account with this email")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("discussion")
     * @Groups("announcement")
     * @Groups("message")
     * @Groups("userProfile")
     * @Groups("userAccount")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Groups("userAccount")
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("discussion")
     * @Groups("userAccount")
     * @Groups("userProfile")
     * @Groups("announcement")
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("discussion")
     * @Groups("userAccount")
     * @Groups("userProfile")
     * @Groups("announcement")
     */
    private $lastname;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     * @Groups("userProfile")
     * @Groups("userAccount")
     */
    private $age;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("userProfile")
     * @Groups("userAccount")
     */
    private $location;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("userProfile")
     * @Groups("userAccount")
     */
    private $title;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups("userProfile")
     * @Groups("userAccount")
     */
    private $description;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups("userProfile")
     * @Groups("userAccount")
     */
    private $experience;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("userProfile")
     * @Groups("userAccount")
     */
    private $portfolio;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("userProfile")
     * @Groups("announcement")
     * @Groups("userAccount")
     */
    private $picture;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("userProfile")
     * @Groups("userAccount")
     */
    private $bannerpicture;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;
     
    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Announcement", mappedBy="user")
     */
    private $announcements;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Message", mappedBy="user")
     */
    private $messages;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Discussion", mappedBy="receiver")
     */
    private $discussionsReceived;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Discussion", mappedBy="creator")
     */
    private $discussionsCreated;


    public function __construct()
    {
        $this->announcements = new ArrayCollection();
        $this->createdAt = new DateTime();
        $this->roles[] = 'ROLE_USER';
        $this->messages = new ArrayCollection();
        $this->discussionsReceived = new ArrayCollection();
        $this->discussionsCreated = new ArrayCollection();
        
    }

    
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';
        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(?string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(?string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getAge(): ?int
    {
        return $this->age;
    }

    public function setAge(?int $age): self
    {
        $this->age = $age;

        return $this;
    }

    public function getLocation(): ?string
    {
        return $this->location;
    }

    public function setLocation(?string $location): self
    {
        $this->location = $location;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getExperience(): ?string
    {
        return $this->experience;
    }

    public function setExperience(?string $experience): self
    {
        $this->experience = $experience;

        return $this;
    }

    public function getPortfolio(): ?string
    {
        return $this->portfolio;
    }

    public function setPortfolio(?string $portfolio): self
    {
        $this->portfolio = $portfolio;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getBannerpicture(): ?string
    {
        return $this->bannerpicture;
    }

    public function setBannerpicture(?string $bannerpicture): self
    {
        $this->bannerpicture = $bannerpicture;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Collection|Announcement[]
     */
    public function getAnnouncements(): Collection
    {
        return $this->announcements;
    }

    public function addAnnouncement(Announcement $announcement): self
    {
        if (!$this->announcements->contains($announcement)) {
            $this->announcements[] = $announcement;
            $announcement->setUser($this);
        }

        return $this;
    }

    public function removeAnnouncement(Announcement $announcement): self
    {
        if ($this->announcements->contains($announcement)) {
            $this->announcements->removeElement($announcement);
            // set the owning side to null (unless already changed)
            if ($announcement->getUser() === $this) {
                $announcement->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Message[]
     */
    public function getMessages(): Collection
    {
        return $this->messages;
    }

    public function addMessage(Message $message): self
    {
        if (!$this->messages->contains($message)) {
            $this->messages[] = $message;
            $message->setUser($this);
        }

        return $this;
    }

    public function removeMessage(Message $message): self
    {
        if ($this->messages->contains($message)) {
            $this->messages->removeElement($message);
            // set the owning side to null (unless already changed)
            if ($message->getUser() === $this) {
                $message->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Discussion[]
     */
    public function getDiscussionsReceived(): Collection
    {
        return $this->discussionsReceived;
    }

    public function addDiscussionsReceived(Discussion $discussionsReceived): self
    {
        if (!$this->discussionsReceived->contains($discussionsReceived)) {
            $this->discussionsReceived[] = $discussionsReceived;
            $discussionsReceived->setReceiver($this);
        }

        return $this;
    }

    public function removeDiscussionsReceived(Discussion $discussionsReceived): self
    {
        if ($this->discussionsReceived->contains($discussionsReceived)) {
            $this->discussionsReceived->removeElement($discussionsReceived);
            // set the owning side to null (unless already changed)
            if ($discussionsReceived->getReceiver() === $this) {
                $discussionsReceived->setReceiver(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Discussion[]
     */
    public function getDiscussionsCreated(): Collection
    {
        return $this->discussionsCreated;
    }

    public function addDiscussionsCreated(Discussion $discussionsCreated): self
    {
        if (!$this->discussionsCreated->contains($discussionsCreated)) {
            $this->discussionsCreated[] = $discussionsCreated;
            $discussionsCreated->setCreator($this);
        }

        return $this;
    }

    public function removeDiscussionsCreated(Discussion $discussionsCreated): self
    {
        if ($this->discussionsCreated->contains($discussionsCreated)) {
            $this->discussionsCreated->removeElement($discussionsCreated);
            // set the owning side to null (unless already changed)
            if ($discussionsCreated->getCreator() === $this) {
                $discussionsCreated->setCreator(null);
            }
        }

        return $this;
    }

   
}
